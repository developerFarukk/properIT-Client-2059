import { Link, useLoaderData, useParams } from "react-router-dom";
import AddRecommend from "./AddRecommend";
import useAuth from "../../../Hooks/useAuth";
import { useEffect } from "react";




const Recommend = () => {
    const { updateTitle } = useAuth();
    // /***/ Query Ditails Data Loade
    const allQueryDetails = useLoaderData();
    // console.log(allQueryDetails);
    const { id } = useParams(allQueryDetails);
    // console.log(id);

    const querys = allQueryDetails?.find((query) => query._id === id)
    // console.log(querys);

    const { productName, productBrand, productimageURL, querytitle, boycotdescription, datetime, recommendationCount, userimageURL, username, _id } = querys;

    // Update Dynamic title Setup
    useEffect(() => {
        updateTitle(' Recomend | ProperIT');
    }, [updateTitle]);


    return (
        <div>

            {/* Query details Card section */}
            <div>
                <section className="p-4 lg:p-8 ">
                    <div className="container mx-auto space-y-12 border">
                        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                            <img src={productimageURL} alt="" className="h-80  aspect-video" />

                            <div className="flex flex-col justify-center flex-1 p-4 ">
                                <h2 className="text-2xl font-medium p-2"> <span>{querytitle}</span></h2>
                                {/* Queries Details */}
                                <div className="text-start">
                                    <p>Product Name : <span>{productName}</span></p>
                                    <p>Brand Name : <span>{productBrand}</span></p>
                                    <p>Alternation Reason : <span>{boycotdescription}</span></p>
                                    <p>Post Date : <span> {datetime} </span></p>
                                    <p>recommendationCount : <span> {recommendationCount} </span></p>
                                </div>
                                <div className="p-2 mt-4">
                                    <h2 className="text-start text-lg font-bold">Posted User Information :</h2>
                                    <div className="flex gap-4 items-center mt-4">
                                        <img alt="" src={userimageURL} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                                        <div className="flex flex-col space-y-1">
                                            <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{username}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>

            {/* This Query All Recommend */}
            <div className="p-6">
                <Link to={`/allrecommendforid/${_id}`}><button className="btn btn-primary hover:btn-warning">See All Recommend</button></Link>
            </div>

            {/* Add Recomandation Section */}
            <div>
                <AddRecommend></AddRecommend>
            </div>

        </div>
    );
};

export default Recommend;