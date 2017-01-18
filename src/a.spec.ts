describe('sinon-chai', () => {
  it('should work', () => {
    const goToPage = sinon.spy();
    goToPage({page: 2});
    expect(goToPage).to.have.been.calledWithExactly({page: 2});
  });
});
