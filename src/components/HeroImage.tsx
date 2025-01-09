interface HeroImageProps {
  heading: string;
  text: string;
}

const HeroImage: React.FC<HeroImageProps> = ({ heading, text }) => {
  return (
    <div
      className="relative h-[380px] bg-cover bg-center"
      style={{ backgroundImage: "url('/pic2.avif')" }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
        <h1 className="text-5xl font-bold mb-4">{heading}</h1>
        <p className="text-2xl">{text}</p>
      </div>
    </div>
  );
};

export default HeroImage;
