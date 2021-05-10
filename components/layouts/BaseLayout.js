import Header from '@/components/shared/Header';

const BaseLayout = props => {
  const { className, user, navClass = "with-bg", loading, children } = props;
  return (
    <div className="layout-container">
      <Header
        user={user}
        loading={loading}
        className={navClass} />
      <main className={`cover ${className}`}>
        <div className="wrapper">
          {children}
        </div>
      </main>
    </div>
  )
}

export default BaseLayout;