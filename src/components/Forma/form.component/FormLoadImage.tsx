import React from "react";
import {useDispatch} from "react-redux";
import {SET_FORM_IMAGE_ACTION} from "../../../redux/action";

export const FormLoadImage = () => {

    const $input = React.useRef<HTMLInputElement>(null)
    const $label = React.useRef<HTMLLabelElement>(null)
    const $image = React.useRef<HTMLImageElement>(null)
    const [errorText, setText] = React.useState('')

    const dispatch = useDispatch()

    const handleLoadImage = (e : React.ChangeEvent) => {

        const reader = new FileReader()
        const target = e.target as HTMLInputElement
        const image = target.files![0]

        const labelNode = $label.current!
        const inputNode = $input.current!
        const imageNode = $image.current!

        const test = image?.name.endsWith('.jpg') || image?.name.endsWith('.jpeg')

        if (image && image.size < 5000000 && test) {

            reader.onload = (file) => {

                Promise
                    .resolve(reader.result)
                    .then(urlImage => {
                        imageNode.src = `${urlImage}`
                        return urlImage
                    })
                    .then(urlImage => {
                        const {height, width} = imageNode

                        if (height <= 70 && width <= 70) {
                            inputNode.style.border = '1px solid #80bdff'
                            inputNode.style.boxShadow = '0 0 2px #80bdff'
                            labelNode.style.border = '1px solid #80bdff'
                            labelNode.style.boxShadow = '0 0 2px #80bdff'

                            inputNode.value = image.name
                            setText('')

                            dispatch(SET_FORM_IMAGE_ACTION(reader.result))
                        }
                        else {
                            notIsValid()
                            setText('The image must be 70x70')
                            dispatch(SET_FORM_IMAGE_ACTION(''))
                        }
                    })
                    .catch(e => {
                        notIsValid()
                        setText('There was an error loading the image')
                        dispatch(SET_FORM_IMAGE_ACTION(''))
                    })
            }
            reader.readAsDataURL(image)
        }
        else {
            notIsValid()
            setText('The image must not be larger than 5MB. Available image format .jpg/jpeg')
            dispatch(SET_FORM_IMAGE_ACTION(''))
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
                    className="form__input notRightNotBottomBorder"
                    type="text" disabled
                    style={{backgroundColor : '#ffffff'}}
                    placeholder="Upload your photo"
                />
                <input
                    onChange={handleLoadImage}
                    className="form__input-file "
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
            <p className="form__error">{errorText}</p>

            <div style={{display : 'none'}}>
                <img ref={$image}/>
            </div>
        </>
    )
}