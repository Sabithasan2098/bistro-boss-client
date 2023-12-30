const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto md:w-4/12 text-center mb-10">
      <h3 className="text-yellow-400 mb-4">--------{subHeading}--------</h3>
      <h2 className="border-y-4 py-4 text-2xl">{heading}</h2>
    </div>
  );
};

export default SectionTitle;
