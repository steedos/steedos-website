import React from 'react';

class Card extends React.Component {

  static defaultProps = {
      href: "",
      image: "",
      category: "",
      title: "",
      description: "",
      theme: "green",
      target: "_self",
  }

  constructor(props) {
    super(props);
  }

  render() {
    let {href, target, image, category, title, description, theme, icon} = this.props;

    let Icon = (<div/>)
    if (icon instanceof Function)
        Icon = icon({class:"h-6 w-6"});
    else if (icon)
        Icon = icon;
    else
        Icon = (<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>);
    
    return (
      <a href={href} target={target} className={`block hover:no-underline flex flex-col rounded-lg overflow-hidden bg-white border border-gray-200 hover:border-${theme}-500`}>
            {image && (
            <div className="flex-shrink-0 aspect-w-16 aspect-h-9">
              <img className="object-cover" src={image} alt=""/>
            </div>
            )}
            
            <div className="p-4 flex">

              {icon && (
                <div class="flex-shrink-0 mr-4">
                <div class={`flex items-center justify-center h-12 w-12 rounded-md bg-${theme}-500 text-white`}>
                  {Icon}
                </div>
              </div>
              )}
              <div className="">
                  {category && (
                  <div className="text-sm leading-5 font-medium text-blue-600">
                  {category}
                  </div>)}
                  <div className="text-xl leading-6 font-medium text-gray-900">
                      {title}
                  </div>
                  {description && (
                  <div className="mt-2 text-base text-gray-500">
                      {description}
                  </div>)}
              </div>
              {/* <div class="flex items-center"></div> */}
            </div>
      </a>
    )
  }
}

export default Card;