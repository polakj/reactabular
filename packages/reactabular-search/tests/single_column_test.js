import { expect } from 'chai';
import { singleColumn } from '../';

describe('search.singleColumn', function () {
  it('matches searched column', function () {
    const query = 'foo';
    const rows = [{ demo: 'foobar' }];
    const result = singleColumn({
      query,
      columns: [
        { cell: { property: 'demo' } }
      ],
      searchColumn: 'demo'
    })(rows);

    expect(result).to.deep.equal(rows);
  });

  it('matches some', function () {
    const query = 'foo';
    const rows = { demo: 'foobar' };
    const result = singleColumn({
      query,
      columns: [
        { cell: { property: 'demo' } }
      ]
    })([
      rows,
      { demo: 'zapzap' }
    ]);

    expect(result).to.deep.equal([rows]);
  });

  it('matches none', function () {
    const query = 'foo';
    const rows = { demo: 'zapzap' };
    const result = singleColumn({
      query,
      columns: [
        { cell: { property: 'demo' } }
      ]
    })([
      rows
    ]);

    expect(result).to.deep.equal([]);
  });

  it('matches against all columns', function () {
    const query = 'foo';
    const rows = [{ demo: 'foobar' }];
    const result = singleColumn({
      query,
      columns: [
        { cell: { property: 'demo' } }
      ],
      searchColumn: 'all'
    })(rows);

    expect(result).to.deep.equal(rows);
  });

  it('matches against all columns by default', function () {
    const query = 'foo';
    const rows = [{ demo: 'foobar' }];
    const result = singleColumn({
      query,
      columns: [
        { cell: { property: 'demo' } }
      ],
      searchColumn: 'all'
    })(rows);

    expect(result).to.deep.equal(rows);
  });

  it('returns all rows without a query', function () {
    const rows = [{ demo: 'foobar' }];
    const result = singleColumn({
      columns: [
        { cell: { property: 'demo' } }
      ]
    })(rows);

    expect(result).to.deep.equal(rows);
  });
});
