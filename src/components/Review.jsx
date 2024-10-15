import customer1 from "../assets/customer1.jpeg";
import customer2 from "../assets/customer2.jpeg";
import customer3 from "../assets/customer3.jpeg";
import customer4 from "../assets/customer4.jpeg";
import reviewIMG from "../assets/xaviour.jpeg";
import { REVIEW } from "../constants";

function Review() {
  return (
    <section id="review" className="container mx-auto mb-8 mt-12">
      <div className="flex flex-col">
        <p className="mb-10 px-4 text-3xl font-light leading-normal tracking-tighter lg:mx-32 lg:mt-32 lg:text-4xl lg:leading-relaxed lg:tracking-normal">
          {REVIEW.content}
        </p>
        <div className="flex items-center justify-center gap-6">
          <img
            src={reviewIMG}
            alt={REVIEW.name}
            width={80}
            height={80}
            className="rounded-full border"
          />
          <div className="tracking-tighter">
            <h6>{REVIEW.name}</h6>
            <p className="text-sm text-neutral-500">{REVIEW.profession}</p>
          </div>
        </div>
      </div>
      <div className="mt-14 flex flex-col items-center justify-center gap-2 md:flex-row">
        {[customer1, customer2, customer3, customer4].map((customer, idx) => (
          <img
            key={idx}
            src={customer}
            alt={`customer${idx}`}
            className="h-[300px] w-[200px] rounded-br-3xl rounded-tl-3xl object-cover"
          />
        ))}
      </div>
    </section>
  );
}

export default Review;
