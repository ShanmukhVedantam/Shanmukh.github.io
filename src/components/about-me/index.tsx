const AboutMe = ({ description, loading }: { description: string; loading: boolean }) => {
  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <h2 className="text-xl font-bold mb-2 text-base-content">About Me</h2>
        {loading ? (
          <div className="animate-pulse h-24 bg-base-200 rounded"></div>
        ) : (
          <p className="text-base text-base-content text-opacity-80 leading-relaxed whitespace-pre-line">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default AboutMe;
