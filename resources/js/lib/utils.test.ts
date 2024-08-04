import { expect, it } from 'vitest';
import { omit } from '@/lib/utils';

it('omits object property from new object', () => {
    // Arrange
    const testObject = {
        foo: 'bar',
        buzz: 'fizz',
    };

    // Act
    const result = omit(testObject, ['buzz']);

    // Assert
    expect(result).toStrictEqual({
        foo: 'bar',
    });
});
