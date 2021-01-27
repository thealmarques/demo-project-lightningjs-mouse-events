import { MouseEvents } from ".";

describe('MouseEvents module', () => {
    it.each`
        event
        ${'click'}
        ${'mousemove'}
        ${'mousedown'}
        ${'mouseup'}
    `('should listen for $event event', ({ event }) => {
        // Given
        const tag = {
            x: 0,
            y: 0,
        };
        const callback = jest.fn();
        MouseEvents.listen(tag, event, callback);

        // When
        window.dispatchEvent(new MouseEvent(event));

        // Then
        expect(callback).toHaveBeenCalled();
  });

  it('should return screen position of element when tag has valid parent', () => {
    // Given
    const tag = {
        x: 10,
        y: 2,
        parent: {
            x: 20,
            y: 30
        }
    };

    // When
    const coordinates = MouseEvents.getBoundingClientRect(tag);

    // Then
    expect(coordinates).toEqual({
        x: 30,
        y: 32
    });
  });

  it('should return screen position of element when tag has no valid parent', () => {
    // Given
    const tag = {
        x: 10,
        y: 2,
        parent: null
    };

    // When
    const coordinates = MouseEvents.getBoundingClientRect(tag);

    // Then
    expect(coordinates).toEqual({
        x: 10,
        y: 2
    });
  });
});
