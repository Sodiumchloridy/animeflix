/* eslint new-cap: ["error", { "newIsCap": false }] */

function Footer() {
  return (
    <div className="bg-gray-900 w-full h-20 flex items-center justify-center">
      <div className="text-sky-50">
        <p>
          &copy; Weebos Hideout {new Date().getFullYear()}. By&nbsp;
          <a href="https://github.com/Sodiumchloridy">
            <span>Sodiumchloridy</span>
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default Footer;
