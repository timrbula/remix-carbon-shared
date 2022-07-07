import { Breadcrumb, BreadcrumbItem } from '@carbon/react';
import { Link } from '@remix-run/react';

interface SharedPageProps {
  title: string;
  children: React.ReactNode;
}

export default function Index(props: SharedPageProps) {
  return (
    <div className={'page-container'}>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/">Home</Link>
        </BreadcrumbItem>
      </Breadcrumb>
      <h1>{props.title}</h1>
      {props.children}
    </div>
  );
}
