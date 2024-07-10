const GeneralLayout = ({children}) => {
  return (
    <>
      <p>Layout Top</p>
      {children}
      <p>Layout Bottom</p>
    </>
  );
}
 
export default GeneralLayout;