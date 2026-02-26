function Footer() {
  return (
    <footer className="w-full max-w-3xl mx-auto px-6 pb-8">
      <hr className="border-gray-200 dark:border-gray-700 mb-6" />
      <div className="text-center">
        <p className="text-sm text-gray-500 dark:text-gray-500">
          &copy; {new Date().getFullYear()} Panav Mhatre
        </p>
      </div>
    </footer>
  );
}

export default Footer;
