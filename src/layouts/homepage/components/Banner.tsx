const Banner = () => {
  return (
      <div
          id="banner"
          tabIndex={-1}
          className="relative z-50 w-full p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 md:p-8"
      >
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-6 max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
          <span className="inline-flex p-3 bg-green-100 dark:bg-green-900 rounded-full w-12 h-12 items-center justify-center shrink-0">
            <svg
                className="w-6 h-6 text-green-600 dark:text-green-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16l6-3 6 3V4a2 2 0 0 0-2-2Z" />
            </svg>
            <span className="sr-only">Book icon</span>
          </span>
            <div className="text-center md:text-left">
              <p className="text-lg font-bold text-gray-900 dark:text-gray-100 md:text-xl">
                Khám Phá Kho Tàng Sách Hay - Mở Ra Thế Giới Tri Thức!
              </p>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                Giảm ngay 20% cho tất cả sách &amp; miễn phí giao hàng toàn quốc từ hôm nay đến 30/7!
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a
                href=""
                className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 transition-colors duration-200"
            >
              Săn Sách Ngay
            </a>
            <button
                type="button"
                className="shrink-0 inline-flex justify-center w-8 h-8 items-center text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full text-sm p-1.5 transition-colors duration-200"
                onClick={() => {
                  const banner = document.getElementById('banner');
                  if (banner) banner.style.display = 'none';
                }}
            >
              <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
              >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Đóng banner</span>
            </button>
          </div>
        </div>
      </div>
  );
};

export default Banner;