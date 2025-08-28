import { point, point3d } from './classes.poc';

describe('classes.poc', () => {
  test('UT001 | point & point3d', () => {
    expect(point.x).toBe(11);
    expect(point.y).toBe(4);
    point.scale(3);
    expect(point.x).toBe(33);
    expect(point.y).toBe(12);
    point.scale(10);
    expect(point.x).toBe(330);
    expect(point.y).toBe(120);
    expect(point3d.x).toBe(1);
    expect(point3d.y).toBe(1);
    expect(point3d.z).toBe(1);
    point3d.scale(100);
    expect(point3d.x).toBe(100);
    expect(point3d.y).toBe(100);
    expect(point3d.z).toBe(100);
  });
});
