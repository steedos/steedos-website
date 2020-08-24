import React from 'react';

import Video from '@site/src/components/Video';

class FeaturesWide extends React.Component {


  render() {
    let {header, title, description, items, imageUrl, videoUrl, containerClass, theme} = this.props;

    if (!containerClass)
      containerClass = ""

    if (!theme)
        theme = "green"

    return (

<div class={"py-12 "  + containerClass}>
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
        {header && (
            <p class={"text-base leading-6 font-semibold tracking-wide uppercase " + "text-" + theme + "-600"}>{header}</p>
        )}
        <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            {title}
        </h3>
        {description && (
        <p class="mt-4 text-xl leading-7 text-gray-500 lg:mx-auto">
            {description}
        </p>
        )}
        </div>
        {videoUrl && imageUrl && (
            <div className="relative mx-auto w-full lg:max-w-md mt-4">
                <div className="relative block w-full rounded-lg shadow-lg overflow-hidden focus:outline-none focus:shadow-outline">
                    <Video 
                    poster={imageUrl}
                    autoplay={false}
                    urls={[
                        {name:"高清", url:videoUrl},
                    ]}/>
                </div>
            </div>
        )}
    
        <div class="mt-10">
        <ul class="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
        {items && items.map(({ title, description, icon }, idx) => {
            if (!icon)
                icon = (<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>);

            return (
            <li>
            <div class="flex">
                <div class="flex-shrink-0">
                <div class={"flex items-center justify-center h-12 w-12 rounded-md text-white "  + "bg-" + theme + "-500"}>
                    {icon}
                </div>
                </div>
                <div class="ml-4">
                <h4 class="text-lg leading-6 font-medium text-gray-900">{title}</h4>
                <p class="mt-2 text-base leading-6 text-gray-500">
                    {description}
                </p>
                </div>
            </div>
            </li>
            )}
        )}
        </ul>
        </div>
    </div>
</div>
      
    )
  }
}

export default FeaturesWide;