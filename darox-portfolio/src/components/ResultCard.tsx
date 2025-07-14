// src/components/ResultCard.tsx
'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Result } from '../data/results'
import React from "react";

interface Props {
  caseData: Result
}

export const ResultCard: React.FC<Props> = ({ caseData }) => {
  return (
    <motion.div
      className="group bg-black/60 backdrop-blur-sm rounded-3xl overflow-hidden shadow-md ring-1 ring-white/10 transition-shadow hover:shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Imagen de cabecera */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={caseData.imageUrl}
          alt={`${caseData.title} preview`}
          fill
          className="object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
          placeholder="blur"
          blurDataURL="/placeholder.png"
        />
        {/* Logo en esquina */}
        <div className="absolute top-4 right-4 bg-white/20 rounded-full p-1">
          <Image
            src={caseData.logoUrl}
            alt={`${caseData.title} logo`}
            width={40}
            height={40}
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Contenido */}
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-bold text-white">{caseData.title}</h4>
          {caseData.status && (
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-green-100 text-green-800">
              {caseData.status}
            </span>
          )}
        </div>
        <p className="text-gray-300 text-sm">{caseData.description}</p>

        {/* Métricas */}
        <div className="grid grid-cols-2 gap-4">
          {caseData.metrics.map((m, idx) => (
            <div key={idx} className="space-y-1">
              <p className="text-2xl font-bold text-indigo-500">{m.value}</p>
              <p className="text-xs text-gray-400">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
