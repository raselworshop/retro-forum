const loadAllPost =async(category)=>{   

    // console.log(`https://openapi.programming-hero.com/api/retro-forum/posts${category?`?category=${category}`:''}`)

    // if(category){
    //     console.log(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${category}`)
    // }else{
    //     console.log(`https://openapi.programming-hero.com/api/retro-forum/posts`)
    // }
    const response = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts${category?`?category=${category}`:''}`)
    const data = await response.json()
    displayAllPost(data.posts)
}

const displayAllPost = (posts)=>{
    const postContainer = document.getElementById('post-container');
    posts.forEach(post => {
        console.log(post)
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="bg-slate-200 p-8 rounded-3xl mb-5">
               <div class="h-24 rounded-3xl bg-slate-600 indicator">
                    <span class="indicator-item badge${post.isActive? 'bg-green-500': 'bg-red-500'}"></span>
                    <div class="avatar">
                        <div class="w-24 rounded-xl">
                            <img src=${post.image} alt="">
                        </div>
                    </div>
                </div> 
                    <div class="p-2">
                        <!-- top text  -->
                        <div class="flex items-center gap-5 mb-3">
                            <p id="categories">#${post.category}</p>
                            <p id="author">Author: ${post.author.name}</p>
                        </div>
                        <!--cards header text -->
                        <div class="mb-3">
                            <h2 class="text-lg md:text-xl font-mulish font-bold mb-1">${post.title}</h2>
                            <p class="text-slate-600 font-mulish">${post.description}</p>
                        </div>
                        <div class="my-5 border border-dashed border-black"></div>
                        <!-- cards bottom info -->
                        <div class="flex justify-between items-center md:grid md:grid-cols-3 grid-cols-2">
                            <div class="grid grid-cols-3 md:col-span-2 justify-between">
                                <!-- comment box -->
                                <div class="flex gap-3">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                        </svg>
                                    </div>
                                    <p>${post.comment_count}</p>                                  
                                </div>
                                <!-- reading done section-->
                                <div class="flex gap-3">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>                                      
                                    </div>
                                    <p>${post.view_count}</p>
                                </div>
                                <!-- cards info time -->
                                <div class="flex gap-3">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>                                                                            
                                    </div>
                                    <p>${post.posted_time} <span>Min</span></p>
                                </div>
                            </div>
                            <div class="flex justify-end">
                                <button id="add-to-list" onclick="markAsRead('${post.description}', ${post.view_count})" 
                                        class="bg-green-300 btn btn-circle text-white rounded-full" data-post='${JSON.stringify(post)}'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-7">
                                        <path d="M19.5 22.5a3 3 0 0 0 3-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 1 1-.712 1.321l-5.683-3.06a1.5 1.5 0 0 0-1.422 0l-5.683 3.06a.75.75 0 0 1-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 0 0 3 3h15Z" />
                                        <path d="M1.5 9.589v-.745a3 3 0 0 1 1.578-2.642l7.5-4.038a3 3 0 0 1 2.844 0l7.5 4.038A3 3 0 0 1 22.5 8.844v.745l-8.426 4.926-.652-.351a3 3 0 0 0-2.844 0l-.652.351L1.5 9.589Z" />
                                    </svg>                                                                                                                
                                </button>
                            </div>
                        </div>
                    </div> 
            </div>
        `
        postContainer.appendChild(div)
    });
}

const markAsRead = (description, view_count) =>{
    // console.log(description, view_count)
    const markAsReadContainer = document.getElementById('markAsReadContainer');
    const div = document.createElement('div');
    div.innerHTML = `
        <div class="flex justify-between items-center gap-2 bg-white p-4 rounded-2xl mb-5">
            <p class="text-left">${description}</p>
            <div class="flex gap-3">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>                                      
                </div>
                <p>${view_count}</p>
            </div>
        </div>
    `
    markAsReadContainer.appendChild(div)
}

 const handleSearchByCategory = () => {
    const searchText = document.getElementById('input-search').value;
    // console.log(searchText);
    loadAllPost(searchText);
 }

loadAllPost();
