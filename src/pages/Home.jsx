import React, { useEffect, useState } from 'react';
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components';


function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []);

    if (posts.length === 0) {
        return (
            <div className="w-full  rounded-lg py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full object-cover animate-fadeIn">
                            <h1 className="text-2xl font-bold hover:text-gray-500 transition duration-300 ease-in-out">
                                Login to read posts
                            </h1>
                            {/* <img className='w-full h-100vh' src="https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" srcset="" /> */}
                        </div>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-full md:w-1/2 lg:w-1/4 animate-slideIn'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Home;
