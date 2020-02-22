import { Item } from './item';

describe('Item', () => {
  it('should create an instance', () => {
    expect(new Item('test',1,'0.0',false,false)).toBeTruthy();
  });
});
