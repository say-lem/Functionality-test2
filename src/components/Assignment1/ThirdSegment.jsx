export const ThirdSegment = ({ todo, search, currentColor }) => {
  return (
    <div className="w-[400px]">
      {todo
        .filter((item) => {
          return search.toLowerCase() === ""
            ? item
            : item.data.toLowerCase().includes(search);
        })
        .map((item) => {
          return (
            <div
              className={`flex gap-2 items-center justify-between ${`${currentColor}`}  m-2 p-1 border-[1px] border-black`}
              key={item?.id}
            >
              <div className="text-black h-[100%] flex items-center  gap-4 w-[300px] ">
                <p className="w-[30px] h-[30px] flex justify-center items-center border-[1px] border-black rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`w-6 h-6 cursor-pointer ${
                      item.checked ? "text-black" : "text-transparent"
                    }`}
                    onClick={() => tick(item.id)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </p>
                {item?.data}
              </div>

              <button
                onClick={() => removeTodo(item?.id)}
                className=" text-black bg-[#e8be8e] shadow-xl w-[100px] justify-center gap-3 items-center flex h-9  rounded-[5px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
                delete
              </button>
            </div>
          );
        })}
    </div>
  );
};
