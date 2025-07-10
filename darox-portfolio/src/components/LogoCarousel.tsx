const LogoCarousel: React.FC = () => {
  const logos = [
    "https://framerusercontent.com/images/vniufJMsSAXh18yjYsUsriXaJgw.png",
    "https://framerusercontent.com/images/yTyqzwdEKp9XJLQBwf8DmWnxws.png",
    "https://framerusercontent.com/images/ffx7akDwhywGTdzIV6fqasW7N8.png",
    "https://framerusercontent.com/images/QJyR5CNEY5EZDa18LPHJLBySZsY.png",
    "https://framerusercontent.com/images/vniufJMsSAXh18yjYsUsriXaJgw.png",
    "https://framerusercontent.com/images/yTyqzwdEKp9XJLQBwf8DmWnxws.png",
    "https://framerusercontent.com/images/ffx7akDwhywGTdzIV6fqasW7N8.png",
    "https://framerusercontent.com/images/QJyR5CNEY5EZDa18LPHJLBySZsY.png",
  ]

  return (
    <section className="py-12 overflow-hidden">
      <div className="relative">
        <div className="flex logo-carousel space-x-16 py-4">
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt="Logo" className="h-18 opacity-70 hover:opacity-100 transition duration-300" loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default LogoCarousel