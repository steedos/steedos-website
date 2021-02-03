import React from 'react';

import Video from '@site/src/components/Video';

class Hero extends React.Component {


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

<div class={"py-10 "  + containerClass}>
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="md:text-center">
        {header && (
            <div class={"mb-3 text-xl leading-6 font-semibold tracking-wide uppercase " + "text-" + theme + "-600"}>{header}</div>
        )}
        <div class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            {title}
        </div>
        {description && (
        <div class="mt-3 max-w-md md:mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
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
            <div className={"relative mx-auto w-full mt-10 overflow-hidden "  + imageClass}>
                <div className="relative block w-full overflow-hidden focus:outline-none focus:shadow-outline">
                    {imageComponent}
                </div>
            </div>
        )}

        {items && (
        <div class="mt-10 text-center">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {items.map(({ title, description, href, icon }, idx) => {
            let Icon = (<div/>)
            if (icon instanceof Function)
                Icon = icon({class:"h-6 w-6"});
            else if (icon)
                Icon = icon;
            else
                Icon = (<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>);
            
            return (
            <div class="pt-6">
                <a href={href} class={`flow-root bg-gray-100 rounded-lg px-6 pb-8 border border-gray-200 hover:border-${theme}-500`}>
                    <div class="-mt-6">
                        <div class="">
                            <div class={`inline-flex items-center justify-center p-3 bg-${theme}-500 rounded-md shadow-lg text-white`}>
                                {Icon}
                            </div>
                        </div>
                        <div class="mt-8 text-xl font-medium text-gray-900 tracking-tight">
                            {title}
                        </div>
                        <div class="mt-5 text-base text-gray-500">
                            {description}
                        </div>
                    </div>
                </a>
            </div>
            )}
        )}
        </div>
        </div>
        )}
    </div>
</div>
      
    )
  }
}

export default Hero;