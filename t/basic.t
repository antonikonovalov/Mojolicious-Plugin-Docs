use Mojo::Base -strict;

use Test::More;
use Mojolicious::Lite;
use Test::Mojo;
use lib 'lib';

plugin 'Docs' => {
	dir => '/home/a.konovalov/dev/Docs/lib',
	prefix_url => '/docs',
};

get '/' => sub {
  my $self = shift;
  $self->render(text => 'Hello Mojo!');
};

my $t = Test::Mojo->new;
$t->get_ok('/')->status_is(200)->content_is('Hello Mojo!');
$t->get_ok('/docs')->status_is(200)->content_is('Hello! See your docs!');

$t->get_ok('/docs.json' => form => {moduls => 'Mojolicious::Plugin::Docs'})
	->json_has({
		moduls => 'Mojolicious::Plugin::Docs',
		success => Mojo::JSON->true,
		msg => 'Hello! See your docs!',
	});

$t->get_ok('/docs.json')
	->json_has({
		success => Mojo::JSON->true,
		msg => 'Hello! See your docs!',
	});

done_testing();
