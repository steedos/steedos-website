import React from 'react';

import Video from '@site/src/components/Video';

class FeaturesWide extends React.Component {


  render() {
    let {header, title, description, buttons, items, imageUrl, imageClass, videoUrl, containerClass, theme} = this.props;

    if (!containerClass)
      containerClass = ""

    if (!imageClass)
      imageClass = "lg:max-w-3xl rounded-lg shadow-lg"

    if (!theme)
        theme = "green"

    let imageComponent = (<img src={imageUrl}/>);
    if (videoUrl) {
        imageComponent = (
        <Video 
            poster={imageUrl}
            autoplay={false}
            urls={[
                {name:"高清", url:videoUrl},
            ]}/>
        );
    }
    return (

<div class={"py-12 "  + containerClass}>
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
        {header && (
            <div class={"text-base leading-6 font-semibold tracking-wide uppercase " + "text-" + theme + "-600"}>{header}</div>
        )}
        <div class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {title}
        </div>
        {description && (
        <div class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {description}
        </div>
        )}
        </div>

        {buttons && (
        <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
        {buttons.map(({ title, href, target, primary }, idx) => {
            let buttonClass = "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10"
            if (primary)
                buttonClass += ` text-white bg-${theme}-600 hover:bg-${theme}-700 hover:text-white`
            else
                buttonClass += ` text-${theme}-600 bg-white hover:bg-gray-50 hover:text-${theme}-600`
            const hrefTarget=target?target:''
            return (
            <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a href={href} class={buttonClass} target={hrefTarget}>
                    {title}
                </a>
            </div>

            )}
        )}
        </div>
        )}

        {imageUrl && (
            <div className={"relative mx-auto w-full mt-4 overflow-hidden "  + imageClass}>
                <div className="relative block w-full overflow-hidden focus:outline-none focus:shadow-outline">
                    {imageComponent}
                </div>
            </div>
        )}
    
        {items && (
        <div class="mt-10">
        <ul class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        {items.map(({ title, description, href, icon }, idx) => {
            let Icon = (<div/>)
            if (icon instanceof Function)
                Icon = icon({class:"h-6 w-6"});
            else if (icon)
                Icon = icon;
            else
                Icon = (<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>);
            
            let Title = title;
            if (href)
                Title = (<a href={href}>{title}</a>)
            return (
            <li>
            <div class="flex">
                <div class="flex-shrink-0">
                    <div class={"flex items-center justify-center h-12 w-12 rounded-md text-white "  + "bg-" + theme + "-500"}>
                        {Icon}
                    </div>
                </div>
                <div class="ml-4">
                    <div class="text-lg leading-6 font-medium text-gray-900">
                        {Title}
                    </div>
                    <div class="mt-2 text-base text-gray-500">
                        {description}
                    </div>
                </div>
            </div>
            </li>
            )}
        )}
        </ul>
        </div>
        )}
    </div>
</div>
      
    )
  }
}

export default FeaturesWide;