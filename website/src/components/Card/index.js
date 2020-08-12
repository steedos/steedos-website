import React from 'react';

class Card extends React.Component {

  static defaultProps = {
      href: "",
      image: "",
      category: "",
      title: "",
      description: "",
  }

  constructor(props) {
    super(props);
  }

  render() {
    let {href, image, category, title, description} = this.props;
    return (
      <a href={href} class="block">
        <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
            {image && (
            <div class="flex-shrink-0">
            <img class="h-48 w-full object-cover" src={image} alt=""/>
            </div>
            )}
            <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
                {category && (
                <p class="text-sm leading-5 font-medium text-indigo-600">
                {category}
                </p>)}
                <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
                    {title}
                </h3>
                {description && (
                <p class="mt-3 text-base leading-6 text-gray-500">
                    {description}
                </p>)}
            </div>
            </div>
        </div>
      </a>
    )
  }
}

export default Card;