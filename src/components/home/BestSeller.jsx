import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import Texts from "../Texts";
import { formatCurrency } from "@/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

export default function BestSeller({ bestSellerProducts }) {
  return (
    <div className="mt-4 py-5 px-lg-4">
      <>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper d-none d-lg-block"
          slidesPerView={3}
          spaceBetween={20}
        >
          {bestSellerProducts?.products?.map((item) => (
            <SwiperSlide
              key={item._id}
              className="bg-white homeBox position-relative rounded-4 shadow-sm "
            >
              <Link
                to={`/products/${item.category.toLowerCase()}/${item.slug}`}
              >
                <LazyLoadImage
                  effect="blur"
                  src={item.image[1]}
                  alt={item.name}
                  width={"100%"}
                  height={550}
                  className="rounded-4 mb-0"
                />
                <div className="position-absolute top-0 p-4 text-start">
                  <Texts
                    text={item.brand}
                    color="var(--bg-zinc-600)"
                    className="fw-bold text-uppercase"
                    size="16px"
                  />
                  <Texts
                    text={item.name}
                    className="fw-semibold text-black"
                    size="1.1rem"
                  />
                  <Texts
                    text={formatCurrency(item.price)}
                    color="var(--bg-zinc-700)"
                    size="16px"
                  />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
      {/* mobile */}
      <div className="px-3 d-lg-none d-flex align-items-center gap-4 overflow-x-scroll overflow-y-hidden scrollbody">
        {bestSellerProducts?.products?.map((item) => (
          <Link
            key={item._id}
            className="homeBox position-relative rounded-4 border bg-white shadow-sm"
            to={`/products/${item.category.toLowerCase()}/${item.slug}`}
            style={{ height: "450px" }}
          >
            <LazyLoadImage
              effect="blur"
              src={item.image[1]}
              alt={item.name}
              width={300}
              height={450}
              className="w-100 h-100 rounded-4 mb-0"
            />
            <div className="position-absolute top-0 p-4">
              <Texts
                text={item.brand}
                color="var(--bg-zinc-600)"
                className="fw-bold text-uppercase"
                size="16px"
              />
              <Texts
                text={item.name}
                className="fw-semibold"
                size="1rem"
                color="var(--bg-zinc-700)"
              />
              <Texts
                text={formatCurrency(item.price)}
                color="var(--bg-zinc-700)"
                size="16px"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
