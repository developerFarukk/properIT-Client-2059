import { Link } from "react-router-dom";



const OurService = () => {
    return (
        <div>

            {/* FAQ Section: Simple */}
            <div className="">
                <div className="container mx-auto space-y-16 px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
                    {/* Heading */}
                    <div className="text-center">
                        <div className="mb-1 text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-500">
                            We Answer
                        </div>
                        <h2 className="text-4xl ">
                            Frequently Post Query
                        </h2>
                    </div>
                    {/* END Heading */}

                    {/* FAQ */}
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
                        <div>
                            <h4 className="mb-2 font-semibold">
                                Implementing Agile Methodology in Software Development
                            </h4>
                            <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                                With its ability to analyze vast amounts of data and make predictions, AI has become an indispensable tool for businesses seeking to gain insights and improve decision-making. In healthcare
                            </p>
                        </div>
                        <div>
                            <h4 className="mb-2 font-semibold">
                                Cybersecurity Measures for Small Businesses
                            </h4>
                            <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                                AI-powered technologies are helping doctors diagnose diseases more accurately and develop personalized treatment plans for patients. In finance, AI algorithms are used to detect fraudulent transactions and predict market trends.
                            </p>
                        </div>
                        <div>
                            <h4 className="mb-2 font-semibold">
                                Blockchain Technology Applications in Supply Chain Managemen
                            </h4>
                            <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                                This query investigates the potential applications of blockchain technology in supply chain management processes. It explores how blockchain can enhance transparency, traceability, and efficiency in supply chain operations, addressing issues such as counterfeit goods, product recalls, and supply chain visibility.
                            </p>
                        </div>
                        <div>
                            <h4 className="mb-2 font-semibold">
                                Implementing DevOps Practices for Continuous Integration and Deployment
                            </h4>
                            <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                                This query explores the adoption of DevOps practices to streamline the software development lifecycle, with a focus on continuous integration and deployment (CI/CD). It discusses the principles of DevOps, automation tools, and best practices for achieving rapid and reliable delivery of software updates.
                            </p>
                        </div>
                        <div>
                            <h4 className="mb-2 font-semibold">
                                Optimizing Website Performance for Mobile Devices
                            </h4>
                            <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                                This query focuses on optimizing website performance for mobile devices to enhance user experience and engagement. It discusses techniques such as responsive web design, image optimization, minification of code, and leveraging browser caching to improve website speed and usability on mobile platforms.
                            </p>
                        </div>
                        <div>
                            <h4 className="mb-2 font-semibold">
                                Cloud Migration Strategies for Enterprise Applications
                            </h4>
                            <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                                This query examines the strategies and considerations involved in migrating enterprise applications to the cloud. It covers topics such as assessing application readiness, selecting the right cloud platform, ensuring data security, and managing the migration process to achieve a seamless transition to the cloud environment.
                            </p>
                        </div>
                    </div>
                    {/* END FAQ */}

                    {/* Link */}
                    <div className="text-center">
                        <a
                            href="#"
                            className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 font-semibold leading-6 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700"
                        >
                            <svg
                                className="hi-mini hi-arrow-top-right-on-square inline-block size-5 opacity-50"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                                    clipRule="evenodd"
                                />
                                <path
                                    fillRule="evenodd"
                                    d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <Link to="/queries"><span>Go to Recommend</span></Link>
                        </a>
                    </div>
                    {/* END Link */}
                </div>
            </div>
            {/* END FAQ Section: Simple */}

        </div>
    );
};

export default OurService;