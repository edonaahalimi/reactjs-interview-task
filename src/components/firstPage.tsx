import React, { useState } from "react";
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import Modal from "./modal";

const navigation = [
  { name: "Create Category | +", href: "#", icon: FolderIcon, current: true },
  { name: "Category (1)", href: "#", icon: FolderIcon, current: false },
  // { name: "Projects", href: "#", icon: FolderIcon, current: false },
  // { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  // { name: "Documents", href: "#", icon: DocumentDuplicateIcon, current: false },
  // { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function FirstPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setIsButtonClicked(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsButtonClicked(false);
  };

  const [rows, setRows] = useState([
    {
      title: "title 1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "title 2",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ]);

  const handleSubmit = (newRow: any) => {
    setRows([...rows, newRow]);
  };

  const filteredRows = rows.filter((row) => {
    const lowerCaseSearchInput = searchInput.toLowerCase();
    return (
      row.title.toLowerCase().includes(lowerCaseSearchInput) ||
      row.description.toLowerCase().includes(lowerCaseSearchInput)
    );
  });

  return (
    <div>
      <div>
        <div className="hidden lg:fixed  lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          <div className="flex pt-3 grow flex-col gap-y-5 overflow-y-auto h-screen border border-gray bg-gray-50 ml-2 my-2 rounded-md  px-6 pb-4">
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-green-500 text-white"
                              : "text-white bg-blue-800 ",
                            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                          )}
                        >
                          <item.icon
                            className="h-6 w-6 shrink-0"
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div
          className={`lg:pl-72 w-full h-screen justify-between ${
            isButtonClicked ? "w-1/2 " : ""
          }`}
        >
          <div
            className={` bg-gray-50 m-2 rounded-md border border-gray h-screen ${
              isButtonClicked ? "w-1/2 " : "full"
            }
           `}
          >
            <div className=" top-0 flex h-10 mt-[12px]  items-center   bg-gray-50  px-4 ">
              <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                <button
                  className="px-4 py-2  bg-green-500 w-[240px] text-white"
                  onClick={openModal}
                >
                  Create Note | +
                </button>
                <form className="relative flex flex-1" action="#" method="GET">
                  <label htmlFor="search-field" className="sr-only">
                    Search
                  </label>
                  <MagnifyingGlassIcon
                    className="pointer-events-none absolute inset-y-0 pl-1 left-0 h-full w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <input
                    id="search-field"
                    className="block h-full w-[350px] border-0 py-0 pl-8 pr-0 text-gray-900 rounded-md placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                    placeholder="Search..."
                    type="search"
                    name="search"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                  />
                </form>
              </div>
            </div>
            <div className="flex py-10">
              <div
                className={`  flex flex-col ${
                  isButtonClicked ? "w-full" : "w-full "
                }`}
              >
                {filteredRows.map((row, index) => (
                  <div
                    key={index}
                    className={`mb-1 h-[55px] border-b  overflow-hidden ${
                      isModalOpen ? "px-4 text-[15px] " : "px-4"
                    }`}
                  >
                    <h2 className="text-xl font-bold">{row.title}</h2>
                    <p className="text-gray-600">{row.description}</p>
                  </div>
                ))}
              </div>
              <div className={` ${isButtonClicked ? "1/23" : ""}`}>
                {isModalOpen && (
                  <div className="  flex  ">
                    <Modal
                      isOpen={isModalOpen}
                      onClose={closeModal}
                      onSubmit={handleSubmit}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
