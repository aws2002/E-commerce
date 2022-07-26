import SkeletonElement from "./SkeletonElement";
import SkeletonAnimations from "./SkeletonAnimations";
export default function SkeletonProductItem() {
  return (
    <div className=" relative  rounded-lg overflow-hidden">
      <div className="skeleton--article">
        <section className="ProductScreen-1 my-14">
          <div className=" container">
            <div className=" titel">
              <SkeletonElement type={"title"} />
            </div>
            <div className=" grid grid-cols-12 gap-5">
              <div className=" col-span-4">
                <SkeletonElement type={"avatar-square"} />
              </div>
              <div className=" col-span-8 p-4">
                <div className=" grid grid-cols-2 my-4">
                  <div className=" col-span-1">
                    <SkeletonElement type={"title"} />
                  </div>
                  <div className=" col-span-1 flex justify-end">
                    <SkeletonElement type={"title"} />
                  </div>
                  <div className=" col-span-1">
                    <SkeletonElement type={"title"} />
                  </div>

                  <div className=" col-span-1">
                    <div className=" grid-cols-12 grid mt-3 gap-x-2">
                      <div className="col-span-2  flex justify-center items-center">
                        <SkeletonElement type={"btn"} />
                      </div>
                      <div className=" col-span-10">
                        <SkeletonElement type={"btn"} />
                      </div>
                    </div>
                  </div>
                  <div className=" col-span-2 mt-14">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                      <SkeletonElement type={"text"} key={index} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <SkeletonAnimations />
    </div>
  );
}
