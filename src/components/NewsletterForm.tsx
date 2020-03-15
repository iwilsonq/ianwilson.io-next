const NewsletterForm: React.FunctionComponent = () => {
  return (
    <form
      action="https://buttondown.email/api/emails/embed-subscribe/iwilsonq"
      method="post"
      target="popupwindow"
      onSubmit={() => {
        window.open('https://buttondown.email/iwilsonq', 'popupwindow');
      }}
      className="embeddable-buttondown-form mb-4"
    >
      <label className="text-sm font-semibold" htmlFor="bd-email">
        Email
      </label>
      <div className="flex mb-4">
        <input
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg mr-2 py-2 px-4 block w-full appearance-none leading-normal"
          type="email"
          placeholder="jane@example.com"
          name="email"
          id="bd-email"
        />
        <input type="hidden" value="1" name="embed" />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Subscribe
        </button>
      </div>
      <p className="text-right">
        <a
          className="text-blue-500 hover:text-blue-800"
          href="https://buttondown.email"
          target="_blank"
        >
          Powered by Buttondown.
        </a>
      </p>
    </form>
  );
};

export default NewsletterForm;
