import { describe } from "node:test";
import Card from "@/components/card";
import one from "../../public/assets/blogs/1.png";
import two from "../../public/assets/blogs/2.png";
import three from "../../public/assets/blogs/3.png";

const blogs = [
  {
    imageSource: one,
    title: "Lorem ipsum dolor sit amet consectetur elit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    imageSource: two,
    title: "Lorem ipsum dolor sit amet consectetur elit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    imageSource: three,
    title: "Lorem ipsum dolor sit amet consectetur elit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
];

export default function Blogs() {
  return (
    <div
      className="container px-4 py-6 md:p-24 flex h-auto flex-col justify-around gap-6 bg-[#E8E2EE] text-black"
      id="blogs"
    >
      <h1 className="font-helvetica_bold text-2xl text-[#330066] font-extrabold">
        Blogs
      </h1>
      <div className="flex gap-6 flex-col md:flex-row">
        {blogs.map((blog, index) => {
          return (
            <Card
              imgGradient="bg-gradient-to-tl to-[#00C2FF] via-[48.8827%] via-[#6633C2] from-[#330066]"
              contentStyle="p-8 space-y-4"
              key={index}
              imageSource={blog.imageSource}
              title={<span className="text-lg">{blog.title}</span>}
              description={blog.description}
            />
          );
        })}
      </div>
    </div>
  );
}
