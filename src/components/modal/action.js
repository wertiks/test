export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export function open_modal(options) {

    const { title, btnText, content} = options;

    return {
        type: OPEN_MODAL,
        title, btnText, content
    };
}

export function close_modal() {

    return {
        type: CLOSE_MODAL
    };
}