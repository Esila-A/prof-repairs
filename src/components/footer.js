const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <div className="footer">
      <p className="copyright">
        Copyright &copy; {year} Prof Repairs. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
