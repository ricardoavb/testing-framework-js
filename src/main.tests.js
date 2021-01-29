import home from './pom/login';

const url = "http://testapp.galenframework.com/";

fixture("test")
    .page(url)
    .beforeEach(() => {

    });

test('should be able to login', async t => {
    const credentials = {};

    await home.pressEnter();
    await home.enterCredentials(credentials);
    await home.submit();

    await t.expect(home.message.exists).ok();
    await t.expect(home.message.innerText).contains("My Notes");
});