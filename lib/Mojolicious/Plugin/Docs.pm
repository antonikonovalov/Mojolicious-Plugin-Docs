package Mojolicious::Plugin::Docs;
use Mojo::Base 'Mojolicious::Plugin';

our $VERSION = '0.01';

sub register {
    my ( $self, $app, $config ) = @_;

    my $r = $app->routes;

    my $base = __FILE__;
    $base =~ s/\.pm//;
    require File::Spec;

    push @{ $app->renderer->paths }, File::Spec->catdir( $base, 'templates' );
    push @{ $app->static->paths },   File::Spec->catdir( $base, 'public' );

    my $prefix_url = $config->{prefix_url} || '/url';
    my $dir = $config->{dir};

    my $docs = $r->bridge($prefix_url);

    $docs->get(
        '/' => sub {
            my $self = shift;

            my $moduls = $self->param('moduls');
            my $text   = 'Hello! See your docs!';

            my $json = {
                msg     => $text,
                success => Mojo::JSON->true,
            };

            if ($moduls) {
                $json->{moduls} = $moduls;
            }

            $self->respond_to(
                json => {json => $json},
                html => {text => $text},
            );
        }
    );
}

1;
__END__

=head1 NAME

Mojolicious::Plugin::Docs - Mojolicious Plugin

=head1 SYNOPSIS

  # Mojolicious
  $self->plugin('Docs');

  # Mojolicious::Lite
  plugin 'Docs';

=head1 DESCRIPTION

L<Mojolicious::Plugin::Docs> is a L<Mojolicious> plugin.

=head1 METHODS

L<Mojolicious::Plugin::Docs> inherits all methods from
L<Mojolicious::Plugin> and implements the following new ones.

=head2 register

  $plugin->register(Mojolicious->new);

Register plugin in L<Mojolicious> application.

=head1 SEE ALSO

L<Mojolicious>, L<Mojolicious::Guides>, L<http://mojolicio.us>.

=cut
