import "../configureAmplify";

export default function Home() {
  return (
    <div>
      <a
        type="button"
        className="inline-flex items-center py-2 px-3 text-xs font-medium text-white bg-blue-600 rounded border border-transparent shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        href="https://sellercentral-europe.amazon.com/apps/authorize/consent?application_id=amzn1.sp.solution.69a50f4e-2ab0-4bdc-ad39-053396c104eb&version=beta"
      >
        Connect with Amazon here
      </a>
    </div>
  );
}
