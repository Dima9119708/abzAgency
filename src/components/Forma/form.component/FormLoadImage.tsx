import React from "react";

export const FormLoadImage = () => {

    const $input = React.useRef<HTMLInputElement>(null)
    const $label = React.useRef<HTMLLabelElement>(null)
    const $errorDiv = React.useRef<HTMLDivElement>(null)
    const $image = React.useRef<HTMLImageElement>(null)

    const handleLoadImage = (e : React.ChangeEvent) => {

        const reader = new FileReader()
        const target = e.target as HTMLInputElement
        const image = target.files![0]

        const labelNode = $label.current!
        const inputNode = $input.current!
        const errorNode = $errorDiv.current!
        const imageNode = $image.current!

        const test = image?.name.endsWith('.jpg') || image?.name.endsWith('.jpeg')

        if (image && image.size < 5000000 && test) {

            reader.onload = () => {

                Promise
                    .resolve(reader.result)
                    .then(urlImage => imageNode.src = `${urlImage}`)
                    .then(e => {
                        const {height, width} = imageNode

                        if (height <= 70 && width <= 70) {
                            inputNode.style.border = '1px solid #80bdff'
                            inputNode.style.boxShadow = '0 0 2px #80bdff'
                            inputNode.value = image.name
                            labelNode.style.border = '1px solid #80bdff'
                            labelNode.style.boxShadow = '0 0 2px #80bdff'
                            errorNode.innerHTML = ''
                        }
                        else {
                            notIsValid()
                            errorNode.innerHTML = 'The image must be 70x70'
                        }
                    })
                    .catch(e => {
                        notIsValid()
                        errorNode.innerHTML = 'There was an error loading the image'
                    })

            }
            reader.readAsDataURL(image)
        }
        else {
            notIsValid()
            errorNode.innerHTML = 'The image must not be larger than 5MB. Available image format .jpg/jpeg'
        }

        function notIsValid() {
            inputNode.style.border = '1px solid #db3445'
            inputNode.style.boxShadow = '0 0 2px #db3445'
            labelNode.style.border = '1px solid #db3445'
            labelNode.style.boxShadow = '0 0 2px #db3445'
        }
    }

    return (
        <>
            <div className="form__inner">
                <input
                    ref={$input}
                    className="form__input"
                    type="text" disabled
                    style={{backgroundColor : '#ffffff'}}
                    placeholder="Upload your photo"
                />
                <input
                    onChange={handleLoadImage}
                    className="form__input-file"
                    id="file"
                    type="file"/>
                <label
                    ref={$label}
                    className="form__input-file-label"
                    htmlFor="file"
                >
                    Browse
                </label>
            </div>
            <p
                ref={$errorDiv}
                className="form__error">
            </p>

            <div style={{display : 'none'}}>
                <img ref={$image}/>
            </div>
        </>
    )
}