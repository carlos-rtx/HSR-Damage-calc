import { Github, Npm } from '@uiw/react-shields';

function Asdf() {
  return (
    <>
      <Npm.Version packageName="react-shields" />
      <Github.Issues user="uiwjs" repo="react-shields" />
    </>
  );
}
export default Asdf
