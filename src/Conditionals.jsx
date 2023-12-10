import React, { useState } from "react";
import { Grid, Paper, Typography } from "@mui/material";
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
            <Slider {...settings}>
                <div>
                    <Paper
                    elevation={3}
                        style={{
                            height: "75vh", overflowY: "hidden",
                        }}
                    >
                        <ShopCollections />
                    </Paper>
                </div>
                <div>
                    <Paper
                        style={{
                            height: "75vh",
                            overflowY: "scroll",
                        }}
                    >
                        <Content />
                    </Paper>
                </div>
                <div>
                    <Paper
                        style={{
                            height: "75vh",
                            overflowY: 'scroll',
                        }}
                    >
                        <BlogSection />
                    </Paper>
                </div>
            </Slider>
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
            <div className="absolute inset-0-z-10 overflow-hidden">
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
        <div className="mt-5 py-12 sm:py-18" style={{ borderRadius: 20 }}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
                        From the blog
                    </h2>
                    <p className="mt-2 text-lg leading-8 text-gray-700">
                        Learn how to grow your business with our expert advice.
                    </p>
                </div>
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-1 border-t border-gray-300 pt-10 sm:mt-12 sm:pt-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article
                            key={post.id}
                            className="bg-gray-800 p-5 flex max-w-xl flex-col items-start justify-between"
                            style={{ borderRadius: 20 }}
                        >
                            <img
                                src={post.image}
                                width={400}
                                height={300}
                                style={{ borderRadius: 10 }}
                            ></img>
                            <div className="flex gap-x-5 items-center text-xs pt-2">
                                <time dateTime={post.datetime} className="flex text-white">
                                    {post.date}
                                </time>
                                <a
                                    href={post.category.href}
                                    className="flex relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                >
                                    {post.category.title}
                                </a>
                            </div>
                            <div className="group relative">
                                <hr style={{ color: 'darkgray', marginTop: 10 }} />
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-blue">
                                    <a href={post.href}>
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </a>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-white">
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
                                    <p className="font-semibold text-white">
                                        <a href={post.author.href}>
                                            <span className="absolute inset-0" />
                                            {post.author.name}
                                        </a>
                                    </p>
                                    <p className="text-white">{post.author.role}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}

function ShopCollections() {
    return (
        <div className="relative overflow-hidden bg-white">
            <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
                <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div className="sm:max-w-lg">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            AI models are finally here
                        </h1>
                        <p className="mt-4 text-xl text-gray-500">
                            This year has witnessed the emergence of numerous ML/AI models capable of handling complex computational tasks. This advancement, while remarkable, has led to increased stress among humans, as AI can now efficiently perform tasks with ease and in less time
                        </p>
                    </div>
                    <div>
                        <div className="mt-10">
                            {/* Decorative image grid */}
                            <div
                                aria-hidden="true"
                                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                            >
                                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                    <div className="flex items-center space-x-6 lg:space-x-8">
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                <img
                                                    src="https://img.freepik.com/premium-photo/beautiful-female-robot-with-artificial-intelligence_536047-2944.jpg"
                                                    alt=""
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src="https://static.vecteezy.com/system/resources/previews/030/468/407/large_2x/a-side-view-from-a-computer-desk-in-a-modern-corporate-office-vertical-mobile-wallpaper-ai-generated-free-photo.jpg"
                                                    alt=""
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src="https://cdn.pixabay.com/photo/2023/05/22/08/26/ai-generated-8010190_1280.jpg"
                                                    alt=""
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src="https://thumbs.dreamstime.com/b/ai-generated-vertical-illustration-cpu-motherboard-central-computer-processor-ai-generated-vertical-illustration-cpu-268553642.jpg"
                                                    alt=""
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src="https://www.dpreview.com/files/p/articles/7928089150/kodak-professional-select-1.jpeg"
                                                    alt=""
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3U2Qnc4GmBPLqh1LhHLvJovKc2xcshFyoWPrT6lR0f6kFIOpb3dkldC4VhxMKVX7RoUM&usqp=CAU"
                                                    alt=""
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/psychedelic-daisy-cindy-greenstein.jpg"
                                                    alt=""
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="#"
                                className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                            >
                                Learn AI Skills
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

