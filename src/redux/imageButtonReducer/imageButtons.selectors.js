import { createSelector } from 'reselect';

const selectImageButtons = state => state.imageButtonsSlice.imageButtons;
console.log(selectImageButtons);
export const selectImageButton = idx => 
    createSelector(
        [selectImageButtons],
        imageButtons => {
            // console.log(imageButtons);
            // console.log(idx);
            // console.log(imageButtons[idx]);
           return  (imageButtons ? imageButtons.filter(imageButton => imageButton.idx === idx)[0] : null)
        }
        )

