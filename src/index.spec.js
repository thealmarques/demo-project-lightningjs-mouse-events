import { EventUtils } from ".";

describe('EventUtils module', () => {
    it('should listen for mouse events', () => {
        // Given
        const tag = {
            x: 0,
            y: 0,
        };
        const callback = jest.fn();
        EventUtils.listen(tag, 'click', callback);

        // When
        window.dispatchEvent(new MouseEvent('click'));

        // Then
        expect(callback).toHaveBeenCalled();
    });
});
