function ContentWrapper({ children, id, classNames }) {
    return (
      <section
        id={id}
        className={`w-full m-0 p-8 bg-bgPrimary ${classNames}`}
      >
        {children}
      </section>
    );
  }
  
  export default ContentWrapper;
  