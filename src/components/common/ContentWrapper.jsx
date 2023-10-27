function ContentWrapper({ children, classNames }) {
    return (
      <section
        className={`w-full min-h-screen m-0 p-8 bg-bgPrimary ${classNames}`}
      >
        {children}
      </section>
    );
  }
  
  export default ContentWrapper;
  