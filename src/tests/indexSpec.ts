import welcome from '../index';

describe('function testing index', () => {
    it('should expect an object instance', () => {
        expect(welcome).toBeInstanceOf(Object)
    })
})