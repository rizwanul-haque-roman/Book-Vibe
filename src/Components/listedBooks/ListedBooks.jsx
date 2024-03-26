const ListedBooks = () => {
  return (
    <div className="container mx-auto">
      <h1 className="work-sans text-black text-5xl font-bold text-center py-10 bg-base-200 rounded-2xl">
        Explored Books
      </h1>
      <div className="text-center my-11">
        <button className="btn bg-[#23BE0A] font-semibold text-lg work-sans text-white">
          Sort
        </button>
      </div>
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab text-lg work-sans"
          aria-label="Read Books"
          checked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 border-b-0 border-x-0"
        >
          Tab content 1
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab text-lg work-sans"
          aria-label="Wishlisted Books"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 border-b-0 border-x-0"
        >
          Tab content 2
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
