import { useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useEffect } from "react";



const RecommendForMe = () => {

    const { user, updateTitle } = useAuth();
    // console.log(user);

    const recommendMe = useLoaderData();
    // console.log(recommendMe);

    // Update Dynamic title Setup
    useEffect(() => {
        updateTitle(' Recommend For Me | ProperIT');
    }, [updateTitle]);

    const recommandMes = recommendMe?.filter((recomand) => recomand?.userEmail === user?.email);
    // console.log(recommandMes);


    return (
        <div>
            <div className="mt-10 mb-10">

                {
                    recommandMes?.length ?

                        <div className="container p-2 mx-auto ">
                            <h2 className="mb-4 text-2xl font-semibold leading-tight"> Recommendation For Me : {recommandMes.length}</h2>
                            <div className="overflow-x-auto">
                                <table className="min-w-full text-xs">
                                    <colgroup>
                                        <col />
                                        <col />
                                        <col />
                                        <col />
                                        <col />
                                        <col className="" />
                                    </colgroup>
                                    <thead className="">
                                        <tr className="text-left">
                                            <th className="p-3">Recommend  Image</th>
                                            <th className="p-3">Recommend Title</th>
                                            <th className="p-3">Recommend Product Name</th>
                                            <th className="p-3">Recommend Date</th>
                                            <th className="p-3">Recommender Name</th>
                                            <th className="p-3 ">Query Peoduct Name</th>
                                        </tr>
                                    </thead>

                                    {
                                        recommandMes.map((user) => <tbody key={user._id}>


                                            <tr className="border-b border-opacity-20 text-start hover:bg-green-100 hover:text-black">
                                                <td className="p-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={user.recommendProductimageURL} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-3">
                                                    <p>{user.recommendTitle}</p>
                                                </td>
                                                <td className="p-3">
                                                    <p className="dark:text-gray-600">{user.recommendProductName}</p>
                                                </td>
                                                <td className="p-3">
                                                    <p className="dark:text-gray-600">{user.recommenddatetime}</p>
                                                </td>

                                                <td className="p-3">
                                                    <p className="dark:text-gray-600">{user.recommenderName}</p>
                                                </td>

                                                <td className="p-3">
                                                    <p className="dark:text-gray-600">{user.productName}</p>
                                                </td>



                                            </tr>
                                        </tbody>)
                                    }
                                </table>
                            </div>
                        </div>
                        :
                        <div>
                            <div className="hero min-h-screen bg-base-200">
                                <div className="hero-content text-center">
                                    <div className="max-w-md">
                                        <h1 className="text-5xl font-bold">No one has recommended your query yet</h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                }




            </div>
        </div>
    );
};

export default RecommendForMe;