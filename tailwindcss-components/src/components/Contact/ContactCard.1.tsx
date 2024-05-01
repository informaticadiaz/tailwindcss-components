export default function ContactCard() {
  return (
    <div className="bg-gray-100 px-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          <li className="col-span-1 flex flex-col rounded-lg bg-white text-center shadow">
            <div className="flex flex-1 flex-col p-8">
              <img src="./user.webp" alt="" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
