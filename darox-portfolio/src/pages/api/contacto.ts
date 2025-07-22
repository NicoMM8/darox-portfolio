import type { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'

const rateLimitMap = new Map<string | string[] | undefined, { count: number; lastReset: number }>()

function rateLimitMiddleware(handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void> | void) {
  return (req: NextApiRequest, res: NextApiResponse) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
    const limit = 5 // 5 peticiones por minuto
    const windowMs = 60 * 1000

    if (!rateLimitMap.has(ip)) {
      rateLimitMap.set(ip, { count: 0, lastReset: Date.now() })
    }

    const ipData = rateLimitMap.get(ip)!
    if (Date.now() - ipData.lastReset > windowMs) {
      ipData.count = 0
      ipData.lastReset = Date.now()
    }

    if (ipData.count >= limit) {
      return res.status(429).json({ ok: false, error: 'Demasiados envíos, inténtalo más tarde.' })
    }

    ipData.count += 1
    return handler(req, res)
  }
}

const ContactSchema = z.object({
  nombre: z.string().min(2).max(50),
  apellidos: z.string().min(2).max(50),
  email: z.string().email(),
  pais: z.string().min(2).max(50),
  tipo: z.string().min(2).max(30),
  mensaje: z.string().max(1000).optional(),
})

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).end('Método no permitido')
    return
  }

  try {
    const data = ContactSchema.parse(req.body)
    res.status(200).json({ ok: true, message: 'Mensaje recibido correctamente.' })
    return
  } catch (err: any) {
    // Mensaje genérico, sin detalles técnicos
    res.status(400).json({ ok: false, error: 'Datos inválidos. Por favor revisa el formulario.' })
    return
  }
}

export default rateLimitMiddleware(handler)