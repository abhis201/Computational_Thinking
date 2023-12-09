import React, { useState } from "react";
import { Paper, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Conditionals = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div>
            <center>
                <Slider {...settings}>
                    <div>
                        <Paper
                            elevation={3}
                            style={{
                                padding: 20, height: "75vh", overflowY: "scroll",
                                paddingTop: 0,
                            }}
                        >
                            {/* <div className="accordion">
                {accordionData.map(({ title, content }) => (
                  <Accordion title={title} content={content} />
                ))}
              </div> */}
                            <Collections />
                        </Paper>
                    </div>
                    <div>
                        <Paper
                            elevation={3}
                            style={{
                                padding: 20,
                                height: "75vh",
                                overflowY: "scroll",
                                paddingTop: 0,
                            }}
                        >
                            <Content />
                        </Paper>
                    </div>
                    <div>
                        <Paper
                            elevation={3}
                            style={{
                                padding: 20,
                                height: "75vh",
                                overflowY: "scroll",
                                paddingTop: 0,
                            }}
                        >
                            <BlogSection />
                        </Paper>
                    </div>
                </Slider>
            </center>
        </div>
    );
};

const accordionData = [
    {
        title: "Section 1",
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
          laborum cupiditate possimus labore, hic temporibus velit dicta earum
          suscipit commodi eum enim atque at? Et perspiciatis dolore iure
          voluptatem.`,
    },
    {
        title: "Section 2",
        content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
          reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
          quaerat iure quos dolorum accusantium ducimus in illum vero commodi
          pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
          quidem maiores doloremque est numquam praesentium eos voluptatem amet!
          Repudiandae, mollitia id reprehenderit a ab odit!`,
    },
    {
        title: "Section 3",
        content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`,
    },
];

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="accordion-item">
            <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                <div>{title}</div>
                <div>{isActive ? "-" : "+"}</div>
            </div>
            {isActive && <div className="accordion-content">{content}</div>}
        </div>
    );
};

import {
    CloudArrowUpIcon,
    LockClosedIcon,
    ServerIcon,
} from "@heroicons/react/20/solid";

export function Content() {
    return (
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg
                    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                            width={200}
                            height={200}
                            x="50%"
                            y={-1}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                        <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect
                        width="100%"
                        height="100%"
                        strokeWidth={0}
                        fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
                    />
                </svg>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <p className="text-base font-semibold leading-7 text-indigo-600">
                                Deploy faster
                            </p>
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                A better workflow
                            </h1>
                            <p className="mt-6 text-xl leading-8 text-gray-700">
                                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh
                                sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque
                                id at vitae feugiat egestas.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <img
                        className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                        src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                        alt=""
                    />
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                            <p>
                                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                                varius sit neque erat velit. Faucibus commodo massa rhoncus,
                                volutpat. Dignissim sed eget risus enim. Mattis mauris semper
                                sed amet vitae sed turpis id.
                            </p>
                            <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                <li className="flex gap-x-3">
                                    <CloudArrowUpIcon
                                        className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                        aria-hidden="true"
                                    />
                                    <span>
                                        <strong className="font-semibold text-gray-900">
                                            Push to deploy.
                                        </strong>{" "}
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                        Maiores impedit perferendis suscipit eaque, iste dolor
                                        cupiditate blanditiis ratione.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <LockClosedIcon
                                        className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                        aria-hidden="true"
                                    />
                                    <span>
                                        <strong className="font-semibold text-gray-900">
                                            SSL certificates.
                                        </strong>{" "}
                                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                                        qui lorem cupidatat commodo.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <ServerIcon
                                        className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                        aria-hidden="true"
                                    />
                                    <span>
                                        <strong className="font-semibold text-gray-900">
                                            Database backups.
                                        </strong>{" "}
                                        Ac tincidunt sapien vehicula erat auctor pellentesque
                                        rhoncus. Et magna sit morbi lobortis.
                                    </span>
                                </li>
                            </ul>
                            <p className="mt-8">
                                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
                                odio id et. Id blandit molestie auctor fermentum dignissim.
                                Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate
                                et ultrices hac adipiscing egestas. Iaculis convallis ac tempor
                                et ut. Ac lorem vel integer orci.
                            </p>
                            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                                No server? No problem.
                            </h2>
                            <p className="mt-6">
                                Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam
                                consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod
                                vitae interdum mauris enim, consequat vulputate nibh. Maecenas
                                pellentesque id sed tellus mauris, ultrices mauris. Tincidunt
                                enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                                turpis ipsum eu a sed convallis diam.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const posts = [
    {
        id: 1,
        title: "Boost your conversion rate",
        href: "#",
        image:
            "https://previews.123rf.com/images/mayrum/mayrum1412/mayrum141200040/34484227-illustration-for-blog-flat-style.jpg",
        description:
            "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        date: "Mar 16, 2023",
        datetime: "2023-03-16",
        category: { title: "Marketing", href: "#" },
        author: {
            name: "Michael Foster",
            role: "Co-Founder / CTO",
            href: "#",
            imageUrl:
                "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    },
    {
        id: 2,
        title: "Improve your website performance",
        href: "#",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBobMODZSTpTcXOet5GZkHP171H6guWpkz4_YUqMOShN4EIRMqLbp1K2YWI-Ns4RQyW8A&usqp=CAU",
        description:
            "Soluta autem nihil quo qui est. Quis eius est et eum accusamus. Nam totam doloribus et rerum. Autem quia ipsa ratione magnam vitae iste odio.",
        date: "Apr 24, 2023",
        datetime: "2023-04-24",
        category: { title: "Web Development", href: "#" },
        author: {
            name: "Abhishek Singh",
            role: "Lead Developer",
            href: "#",
            imageUrl: "/profile-abhishek.png",
        },
    },
    {
        id: 3,
        title: "Introduction to Machine Learning",
        href: "#",
        image:
            "https://www.elegantthemes.com/blog/wp-content/uploads/2019/11/post-template-featured-image.png",
        description:
            "Eum dignissimos est qui accusamus commodi doloribus. Quia omnis rerum voluptas et odit. Quisquam molestiae perspiciatis et dolorum et. Fugiat excepturi nesciunt quae voluptate occaecati doloribus quis est.",
        date: "May 12, 2023",
        datetime: "2023-05-12",
        category: { title: "Technology", href: "#" },
        author: {
            name: "Alex Thompson",
            role: "Data Scientist",
            href: "#",
            imageUrl:
                "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        },
    },
];

function BlogSection() {
    return (
        <div className="bg-white py-12 sm:py-18">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        From the blog
                    </h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Learn how to grow your business with our expert advice.
                    </p>
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article
                            key={post.id}
                            className="flex max-w-xl flex-col items-start justify-between"
                        >
                            <img
                                src={post.image}
                                width={400}
                                height={300}
                                style={{ borderRadius: 10 }}
                            ></img>
                            <div className="flex items-center gap-x-4 text-xs pt-2">
                                <time dateTime={post.datetime} className="text-gray-500">
                                    {post.date}
                                </time>
                                <a
                                    href={post.category.href}
                                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                >
                                    {post.category.title}
                                </a>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <a href={post.href}>
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </a>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                                    {post.description}
                                </p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <img
                                    src={post.author.imageUrl}
                                    alt=""
                                    className="h-10 w-10 rounded-full bg-gray-50"
                                />
                                <div className="text-sm leading-6">
                                    <p className="font-semibold text-gray-900">
                                        <a href={post.author.href}>
                                            <span className="absolute inset-0" />
                                            {post.author.name}
                                        </a>
                                    </p>
                                    <p className="text-gray-600">{post.author.role}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}

const callouts = [
    {
        name: 'Desk and Office',
        description: 'Work from home accessories',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        href: '#',
    },
    {
        name: 'Self-Improvement',
        description: 'Journals and note-taking',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: '#',
    },
    {
        name: 'Travel',
        description: 'Daily commute essentials',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
    },
]

function Collections() {
    return (
        <div className="bg-gray-100">
            <div className="mx-auto max-w-7xl mt-6 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-4 sm:py-10 lg:max-w-none lg:py-12">
                    <h2 className="text-2xl font-bold pb-5 pt-5 text-gray-900">Collections</h2>

                    <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        {callouts.map((callout) => (
                            <div key={callout.name} className="group relative">
                                <div className="relative h-70 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-54">
                                    <img
                                        src={callout.imageSrc}
                                        alt={callout.imageAlt}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <h3 className="mt-6 text-sm text-gray-500">
                                    <a href={callout.href}>
                                        <span className="absolute inset-0" />
                                        {callout.name}
                                    </a>
                                </h3>
                                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
