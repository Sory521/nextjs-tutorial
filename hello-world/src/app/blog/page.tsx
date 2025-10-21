export default async function Blog() {
    await new Promise(resole => {
        setTimeout(() => {
            resole("international delay")
        }, 2000);
    });
    return <h1>My blog</h1>
}